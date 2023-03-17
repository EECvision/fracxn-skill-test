const classes = {
  container: `
    w-full
    max-w-screen-2xl
    mb-24
    flex flex-col lg:flex-row
    gap-12 lg:gap-24
    px-4 lg:px-8
  `,
  lhs: `
    w-full
    flex 
    items-center
    justify-center
  `,
  rhs: `
    flex flex-col
    items-start
    justify-center
    gap-8
  `,
  image: `
    w-full xs:w-3/4 lg:w-full
  `,
  title: `
    text-2xl xs:text-4xl md:text-2xl lg:text-4xl xl:text-5xl
    font-bold
    leading-normal
  `,
  accent: `
    text-accent
    whitespace-nowrap
  `,
  list: `
    grid grid-cols-2 gap-x-8 gap-y-4
  `,
  item: `
    flex 
    gap-2
  `
};

export default classes;
