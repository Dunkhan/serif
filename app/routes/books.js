import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			ISBN: '1-245678901-2-3',
			Format: 'Hardcover',
			Title: 'Fake Book',
			Author: 'Duncan Robertson',
			Subtitle: 'The art of making up fake data for testing',
			Language: 'eng',
			Publication_Date: '2019-08-09T13:51:00Z',
			Page_Count: '0',
			Series_Name: 'Fake books made up for serif',
			Series_Number: '1',
		},
		{
			ISBN: '1-245678901-2-4',
			Format: 'Hardcover',
			Title: 'Another Fake Book',
			Author: 'Duncan Robertson',
			Subtitle: 'The art of making up fake data for more testing',
			Language: 'deu',
			Publication_Date: '2019-08-09T13:54:00Z',
			Page_Count: '0',
			Series_Name: 'Fake books made up for serif',
			Series_Number: '2',
		},
		{
			ISBN: '1-245678901-2-5',
			Format: 'Hardcover',
			Title: 'How to fly',
			Author: 'Arthur Dent',
			Subtitle: '',
			Language: 'eng',
			Publication_Date: '1982-08-09T13:51:00Z',
			Page_Count: '0',
			Series_Name: '',
			Series_Number: '',
		}];
	}
});
