## [1.1.0] 2021-02-01
### Bug fixing
- https://github.com/creativetimofficial/ct-nextjs-material-dashboard-pro/issues/2
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
- @types/googlemaps
- @types/markerclustererplus
- react-google-maps (we'll use simple Google Maps API with Vanilla JS instead)
- webpack (`next` will install the appropriate one)
### Added dependencies
### Updated dependencies
```
@material-ui/core       4.11.0   →   4.11.3
@material-ui/icons       4.9.1   →   4.11.2
next                     9.5.2   →   10.0.5
next-compose-plugins     2.2.0   →    2.2.1
next-images              1.3.1   →    1.7.0
react                  16.13.1   →   17.0.1
react-dom              16.13.1   →   17.0.1
typescript               3.9.7   →    4.1.3
```
### Warning
### Warning
**At the moment, the `pages/_app.js` and `pages/_document.js` could not be converted to functional components - for HOOK support, since they still need some of the class comments life-cycle methods. Please check this here: https://nextjs.org/docs/advanced-features/custom-document.**
**The TypeScript dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not based on TypeScript!**
_The following warnings will appear when running the installation command, but they do not affect the UI or the functionality of the product (they will be solved in our next update):_
```
npm WARN react-chartist@0.14.3 requires a peer of react@^0.14.9 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-swipeable-views@0.13.9 requires a peer of react@^15.3.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-event-listener@0.6.6 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
```
_If they will persist in our 2.*.* version, we will drop their usages and replace them with other plugins._
_In development mode, some of the above plugins will throw a warning because they still use React v16 syntax. If the error will persist in our 2.*.* version, we will drop their usage and replace them with other plugins._

## [1.0.0] 2020-08-19
### Original Release
- Started project with NextJS
- Added design from Material Dashboard React by Creative Tim
### Warning
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
