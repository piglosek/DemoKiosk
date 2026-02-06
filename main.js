
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'polish',
    dialNumber: 'piglosek@cisco.com',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber, name: 'Kredyt' },
        { url: this.dialNumber, name: 'Pożyczka' },
        { url: this.dialNumber, name: 'Pomoc' },
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

