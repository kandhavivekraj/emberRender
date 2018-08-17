import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    getAllStars(templateName, options = {}) {
      let instance = options.engineInstance || this;
      this.set('instance', instance);
      instance.render(templateName, {
        into: 'application',
        outlet: 'galaxy',
      });
    },
    clearOutlet() {
      if(this.get('instance')) {
        // this.get('instance').disconnectOutlet({
        //   outlet: 'galaxy',
        //   parentView: 'application'
        // });
        this.disconnectOutlet({
          outlet: 'galaxy',
          parentView: 'application'
        });
      }
    }
  }
});
