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
  var fundImages = document.querySelectorAll('.fund-img');

  fundImages.forEach(function (img, index) {
    img.addEventListener('click', function () {
      window.open(fundItems[index].url, '_blank');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var fundList = document.getElementById('fundList');
  var fundItems = fundList.getElementsByClassName('fund-item');
  var fundBtn = document.querySelector('.fund-btn');

  // Функция для скрытия всех элементов списка
  function hideAllItems() {
    for (var i = 0; i < fundItems.length; i++) {
      fundItems[i].style.display = 'none';
    }
  }

  // Функция для показа первых шести элементов
  function showFirstSixItems() {
    for (var i = 0; i < 6; i++) {
      fundItems[i].style.display = 'block';
    }
  }

  // Показываем первые шесть элементов при загрузке страницы
  hideAllItems();
  showFirstSixItems();

  // При нажатии на кнопку отображаем следующие шесть элементов, пролистываясь
  fundBtn.addEventListener('click', function () {
    var isHidden = fundItems[0].style.display === 'none';

    if (isHidden) {
      // Показываем верхние три элемента
      for (var i = 0; i < 3; i++) {
        fundItems[i].style.display = 'block';
      }
      // Скрываем следующие шесть элементов
      for (var i = 6; i < 12; i++) {
        if (fundItems[i]) {
          fundItems[i].style.display = 'none';
        }
      }
    } else {
      // Скрываем верхние три элемента
      for (var i = 0; i < 3; i++) {
        fundItems[i].style.display = 'none';
      }
      // Показываем следующие шесть элементов
      for (var i = 6; i < 12; i++) {
        if (fundItems[i]) {
          fundItems[i].style.display = 'block';
        }
      }
    }
  });
});
