<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/">iam4722202468</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/scheduler">Guelph Scheduler 2</b-nav-item>
          <b-nav-item to="/lightingengine">C++ Lighting Engine</b-nav-item>
          <b-nav-item to="/montecarlotree">Monte Carlo Tree</b-nav-item>
          <b-nav-item-dropdown text="Co-op Summaries" right>
            <b-dropdown-item to="/co-op">Focus21 Co-op</b-dropdown-item>
            <b-dropdown-item to="/co-op2">eSentire Co-op</b-dropdown-item>
            <b-dropdown-item to="/manulife_coop">Manulife Co-op</b-dropdown-item>
            <b-dropdown-item to="/blackberry_coop">Blackberry Co-op</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/resume">Resume</b-nav-item>
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
