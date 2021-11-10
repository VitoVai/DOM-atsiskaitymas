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
    setTimeout(this.fetchApartments, 1000);
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3';
    this.render();
  }

  render = () => {
    const { loading, apartments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (apartments.length > 0) {
      this.htmlElement.innerHTML= '';
      const apartmentCardComponents = apartment
      .map(x => new ApartmentCardComponent(x))
      .map(x => x.htmlElement)
      this.htmlElement.append(...apartmentCardComponents);
    } else {
      this.htmlElement.innerHTML = 'NĖRA DUOMENŲ';
    };
  }
}  