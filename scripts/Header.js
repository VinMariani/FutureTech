class Header {
    selectors = {
      root: '[data-js-header]',
      overlay: '[data-js-header-overlay]',
      burgerButton: '[data-js-header-burger-button]',
    }
  
    stateClasses = {
      isActive: 'is-active',
      isLock: 'is-lock',
    }
  
    constructor() {
      this.rootElement = document.querySelector(this.selectors.root)
      this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
      this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
      this.bindEvents()
    }
  
    onBurgerButtonClick = () => {
      this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
      this.overlayElement.classList.toggle(this.stateClasses.isActive)
      document.documentElement.classList.toggle(this.stateClasses.isLock)
    }
  
    bindEvents() {
      this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
  }
  
  export default Header

// class Header {
//     // selectors нужен, чтобы не обращаться в коде напрямую к строкам, чтобы избежать нежелательных ошибок
//     selectors = {
//         root: '[data-js-header]', // корневой компонент
//         overlay: '[data-js-header-overlay]',
//         burgerButton: '[data-js-header-burger-button',
//     }

//     // для состояния элементов
//     stateClasses = {
//         isActive: 'is-active',
//         isLock: 'is-lock',
//     }

//     // конструктор автоматически выполняет код при инициализации класса - `new Header()`
//     constructor() {
//         this.rootElement = document.querySelector(this.selectors.root); // корневой компонент разрабатываемого элемента
//         this.overlayElement = document.querySelector(this.selectors.overlay);
//         this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
//         this.bindEvents() // вызываем метод bindEvents
//     }

//     onBurgerButtonClick = () => {
//         this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
//         this.overlayElement.classList.toggle(this.stateClasses.isActive);
//         document.documentElement.classList.toggle(this.stateClasses.isLock);
//     }

//     // привязки событий к дом элементам
//     bindEvents() {
//         this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
//     }
// }

// export default Header