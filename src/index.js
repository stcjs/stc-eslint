import Plugin from 'stc-plugin';
import {linter} from 'eslint';
import defaultOptions from './default_options.js';
import {extend} from 'stc-helper';

let options = null;

/**
 * Use ESlint to verify code
 */
export default class ESlintPlugin extends Plugin {
  /**
   * run
   */
  async run(){
    if(!options){
      options = extend({}, defaultOptions);
      options = extend(options, this.options);
    }

    let content = await this.getContent('utf8');

    let messages = linter.verify(content, options, {
      filename: this.file.path 
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
   * enable cache
   */
  static cache(){
    return true;
  }
}