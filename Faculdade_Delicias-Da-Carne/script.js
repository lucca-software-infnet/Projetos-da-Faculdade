
    @media (max-width: 767px) {
        .carousel-inner .carousel-item>div {
            display: none;
        }
  
        .carousel-inner .carousel-item>div:first-child {
            display: block;
        }
    }
  
    @media (min-width: 768px) {
        .carousel-inner .carousel-item-end.active,
        .carousel-inner .carousel-item-next {
            transform: translateX(25%);
        }
  
        .carousel-inner .carousel-item-start.active,
        .carousel-inner .carousel-item-prev {
            transform: translateX(-25%);
        }
    }
  
    .carousel-inner .carousel-item-end,
    .carousel-inner .carousel-item-start {
        transform: translateX(0);
    }
  
  
  