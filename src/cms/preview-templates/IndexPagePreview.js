import React from 'react';

import { IndexPageTemplate } from '../../templates/index-page';

export default function IndexPagePreview({ entry, getAsset }) {
	const data = entry.getIn(['data']).toJS();
	console.log('data :', data);

	if (data) {
		return <IndexPageTemplate title={data.title} image={data.image} />;
	} else {
		return <div>Loading...</div>;
	}
}
