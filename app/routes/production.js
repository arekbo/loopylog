import Ember from 'ember';

export default Ember.Route.extend({
model(params) {
    // return {
    //   "ProductName": "Ponderosa",
    //   "DimensionName": "1\" X 4\" X 14'",
    //   "BoardsSum": 20,
    //   "BoardFeetSum": 10000
    // }
    return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
});
