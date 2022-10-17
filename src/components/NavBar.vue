<template>
  <div>
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      <div class="container is-max-desktop px-2">
        <div class="navbar-brand">
          <div class="navbar-item is-size-4">E-commerce</div>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> Products </a>
              <div class="navbar-dropdown">
                <RouterLink to="/clothes" class="navbar-item">
                  Clothes
                </RouterLink>
                <RouterLink to="/cars" class="navbar-item"> Cars </RouterLink>
                <RouterLink to="/electronics" class="navbar-item">
                  Electronics
                </RouterLink>
              </div>
            </div>
            <RouterLink to="/" class="navbar-item"> Home </RouterLink>
            <RouterLink to="/create" class="navbar-item"> Create </RouterLink>
            <RouterLink to="/about" class="navbar-item"> About </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
