// We only need to import the modules necessary for initial render
import CoreLayout from '../components/Layouts/CoreLayout'
import HomeView from '../components/Home/HomeView'
import CityEvents from '../containers/CityEvents'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeView,
  childRoutes : [
    CityEvents
  ]
})

export default createRoutes
