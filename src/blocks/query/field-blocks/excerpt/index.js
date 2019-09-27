import { registerBlockType } from '@wordpress/blocks';
import { useEntityProp } from '@wordpress/core-data';
import { RawHTML } from '@wordpress/element';

import { name } from '../../index';
const parent = `newspack-blocks/${ name }`;

export const registerExcerptBlock = () => registerBlockType( 'newspack-blocks/excerpt', {
	title: 'Excerpt',
	category: 'layout',
	parent,
	edit: ( ) => {
		const [ excerpt ] = useEntityProp( 'postType', 'post', 'excerpt' );
		return <RawHTML>{ excerpt }</RawHTML>
	},
	save: () => null,
	attributes: {
		post: {
			type: 'object',
			default: {
				excerpt: {
					rendered: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>'
				}
			}
		}
	}
} );
