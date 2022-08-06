const populerSetupScrolling = () => {
  const container = [...document.querySelectorAll('.populargrid')];
  const nxtBtn = [...document.querySelectorAll('.popular_nxt-btn')];
  const preBtn = [...document.querySelectorAll('.popular_pre-btn')];

  container.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    });
  });
};

const setupScrolling = () => {
  const container = [...document.querySelectorAll('.movie-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];

  container.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    });
  });
};
