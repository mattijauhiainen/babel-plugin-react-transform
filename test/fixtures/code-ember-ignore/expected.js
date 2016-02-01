const instance1 = Ember.Object.create({ render() {} });
const instance2 = Ember.Object.createWithMixins({ render() {} });
const instance3 = Ember.Object.createWithMixins({ render: function () {} });
const class1 = Ember.Object.extend({ render() {} });
const class2 = Ember.Object.extend({ render: function () {} });
const class3 = PrettyMuchAnything.withRenderMethod({ render() {} });
