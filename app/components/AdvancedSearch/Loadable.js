/**
 *
 * Asynchronously loads the component for AdvancedSearch
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
