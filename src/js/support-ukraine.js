document.addEventListener('DOMContentLoaded', function () {
  const fundItems = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: null,
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: null,
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: null,
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: null,
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: null,
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: null,
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: null,
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: null,
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: null,
    },
  ];

  const fundImages = document.querySelectorAll('.fund-img');
  const fundList = document.getElementById('fundList');
  const fundItemsElements = fundList.getElementsByClassName('fund-item');
  const fundBtn = document.querySelector('.fund-btn');
  let visibleIndex = 0;

  function hideAllItems() {
    for (const item of fundItemsElements) {
      item.classList.add('hidden');
    }
  }

  function showItems(start, end) {
    for (let i = start; i < end; i++) {
      fundItemsElements[i]?.classList.remove('hidden');
    }
  }

  hideAllItems();
  showItems(0, 6);

  fundBtn.addEventListener('click', function () {
    const endIndex = visibleIndex + 6;
    if (endIndex < fundItemsElements.length) {
      hideAllItems();
      showItems(visibleIndex + 3, endIndex + 3);
      visibleIndex += 3;
    } else {
      hideAllItems();
      showItems(0, 6);
      visibleIndex = 0;
    }
  });

  document.getElementById('myButton').addEventListener('click', function () {
    this.classList.toggle('flipped');
  });

  fundImages.forEach(function (img, index) {
    img.addEventListener('click', function () {
      window.open(fundItems[index].url, '_blank');
    });
  });
});