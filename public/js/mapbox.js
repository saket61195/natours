/* eslint-disable */

export const displayMap = (locations) => {
  maptilersdk.config.apiKey = 'z4nlLDGQ9NSiE6IjKT8D';

  const map = new maptilersdk.Map({
    container: 'map',
    style: 'basic-v2-light',
    scrollZoom: false,
  });

  const bounds = new maptilersdk.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';
    new maptilersdk.Marker({
      element: el,
      ancher: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    new maptilersdk.Popup({
      offset: 30,
      closeOnClick: false,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 200,
      right: 20,
    },
  });
};
