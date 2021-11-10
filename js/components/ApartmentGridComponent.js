class ApartmentGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      apartments: []
    };
    this.init();
  }
  
  saveApartments = apartments => {
    this.state = { apartments, loading: false };

    this.render();
  }


  showError = msg => alert(msg);

  fetchApartments = () => API.fetchApartments(this.saveApartments, this.showError);


  init = () => {
    this.state.loading = true;
    this.fetchApartments();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading, apartments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = 'siunčiama...';
    } else if (apartments.length > 0) {
      this.htmlElement.innerHTML = 'parsiųsta!';
    } else {
      this.htmlElement.innerHTML = 'NĖRA DUOMENŲ';
    };
  }
}  