
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'polish',
    dialNumber1: 'sip:piglosek@cisco.com',
    dialNumber2: 'sip:piglosek.cisco@webex.com',
    dialNumber3: 'tel:1112',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber1, name: 'Kredyt' },
        { url: this.dialNumber2, name: 'Pożyczka' },
        { url: this.dialNumber3, name: 'Pomoc' },
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'polish',
    languages: ['english', 'polish'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

