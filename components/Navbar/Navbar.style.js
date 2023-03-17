const classes = {
  container: ` 
    w-full 
    sticky
    top-0
    bg-main
    z-20
    py-8 px-8
    mb-6 lg:mb-12 
    whitespace-nowrap
  `,
  wrapper: `
    w-full 
    my-0 mx-auto 
    flex 
    justify-between
    items-center
    gap-4
  `,
  logo: `
    w-32 md:w-42 lg:w-48
    h-8 md:h-10 lg:h-12
  `,
  navContainer: `
    justify-center
    items-center
    gap-4 lg:gap-8
    py-2 px-6 lg:px-10
    rounded-full
    hidden md:flex
    bg-card-dark
    border border-faint-dark
  `,
  navItem: `
    text-sm lg:text-lg
    hover:text-accent
    cursor-pointer
    transition ease-in-out delay-150
  `,
  lunchBtn: `
    hidden md:flex 
    justify-center
    items-center
    py-2 px-6 lg:px-10
    rounded-full
    text-sm lg:text-lg
    border border-accent
    text-accent hover:text-white
    cursor-pointer
    hover:bg-gradient-to-r from-grad-1 to-grad-2
  `,
  toggleIcon: `
    block md:hidden
  `
};

export default classes;
