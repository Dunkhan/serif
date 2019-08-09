import Controller from '@ember/controller';

export default Controller.extend({
	init() {
		this._super(...arguments);
		this.columns = this.columns || [
			{
				propertyName: 'Title', 
				title: 'Title', 
			},
			{
				propertyName: 'Author', 
				Title: 'Author'
			},
			{
				propertyName: 'ISBN', 
				Title: 'ISBN'
			}
		];
	}
});
