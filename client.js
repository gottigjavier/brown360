// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const wPanel = new Surface(
    800,
    500,
    Surface.SurfaceShape.Cylinder
  );

  const leftPanel = new Surface(
    200,
    500,
    Surface.SurfaceShape.Flat
  );
  leftPanel.setAngle(-0.7,0,0);

  const rightPanel = new Surface(
    200,
    500,
    Surface.SurfaceShape.Flat
  );
  rightPanel.setAngle(0.7,0,0);


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('welcomePanel',{ /* initial props */ }),
    wPanel
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('navPanel',{ /* initial props */ }),
    leftPanel
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('navPanel',{ /* initial props */ }),
    rightPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('hotel-ext111.avif'));
}

window.React360 = {init};
