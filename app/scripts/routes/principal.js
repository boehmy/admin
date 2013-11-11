App.PrincipalRoute = App.AuthenticatedRoute.extend({
    actions : {
        delete: function(principal) {
            var self = this;
            principal.remove(App.session, function(err) {
                self.transitionTo('principals');
            });
        }
    },

    activate: function() {
        setTimeout(function() { $('#principalsTab').addClass('active'); }, 0);
    },

    deactivate: function() {
        setTimeout(function() { $('#principalsTab').removeClass('active'); }, 0);
    },

    model: function(params) {
        this.set('params', params);
        return this.query();
    },

    query: function() {
        return App.Principal.findById(this.get('params.id'));
    },

    serialize: function(model, params) {
        return { id: model.get('id') };
    }/*,

    setupController: function(controller, principal) {
        this._super(controller, principal);

        this.controller.set('router', this);


        TODO: principals_realtime: disabled until we work out rate limiting to prevent update storms.

        this.subscription = App.session.onPrincipal({ id: this.get('controller.content.id') }, function(nitrogenPrincipal) {
            var updatedPrincipal = App.Principal.create(nitrogenPrincipal);
            self.controller.set('content', updatedPrincipal);
        });
    },

    actions: {
        willTransition: function(transition) {
            if (this.subscription) {
                App.session.disconnectSubscription(this.subscription);
                this.subscription = null;
            }
        }        
    }
    */

});