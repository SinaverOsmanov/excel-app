import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });
  }

  toHTML() {
    return ` <input type="text" value="Новая таблица" class="input">
            <div>
                <div class="button" id="remove" >
                    <span class="material-icons">delete</span>
                </div>
                <div class="button">
                    <span class="material-icons">exit_to_app</span>
                </div>
            </div>`;
  }
}
