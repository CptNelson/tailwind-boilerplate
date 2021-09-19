module.exports = {
	purge: [],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat'],
			},
			height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
			backgroundImage: (theme) => ({
				'forest': "url('/src/assets/img/forest.jpg')",
			}),
		colors: (theme) => ({
			primary: {
				50: '#f9f9f7',
				DEFAULT: '#eae7dc', // 1
				200: '#e3dad5',
				30: '#c3b7ad',
				400: '#9e8f83',
				500: '#816e5f',
				600: '#695346',
				700: '#513f36',
				800: '#382c27',
				900: '#241c1a',
			},
		}),
		},
		container: {
			// To center containers by default
			center: true,
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
};0
