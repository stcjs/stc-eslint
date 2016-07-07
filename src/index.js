import Plugin from 'stc-plugin';
import defaultOptions from './default_options.js';
import {extend} from 'stc-helper';

let options = null;
let linter = null;

/**
 * Use ESlint to verify code
 */
export default class ESlintPlugin extends Plugin {
  /**
   * run
   */
  async run(){
    if(!linter){
      linter = require('eslint').linter;
    }
    
    if(!options){
      options = extend({}, defaultOptions);
      options = extend(options, this.options);
    }
    let content = await this.getContent('utf8');
    let messages = linter.verify(content, options, {
      filename: this.file.path 
    });
    messages = messages.map(item => {
      return {
        fatal: item.fatal,
        message: item.message,
        line: item.line,
        column: item.column
      }
    });
    return messages;
  }
  /**
   * update
   */
  update(messages){
    messages.forEach(item => {
      if(item.fatal){
        return this.fatal(item.message, item.line, item.column);
      }
      this.error(item.message, item.line, item.column);
    });
  }
  /**
   * use cluster
   */
  static cluster(){
    return true;
  }
  /**
   * enable cache
   */
  static cache(){
    return true;
  }
}