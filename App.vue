<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/">iam4722202468</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/example1">First example</b-nav-item>
          <b-nav-item-dropdown text="Dropdown" right>
            <b-dropdown-item to="/example2">Second example</b-dropdown-item>
            <b-dropdown-item to="/example3">Third example</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>
