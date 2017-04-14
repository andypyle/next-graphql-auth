import Layout from '../components/Layout.js';

const Index = () => {
	return (
		<Layout>
			<style jsx>
			{`
				section {

				}

				h2 {
					font-size: 1.33rem;
					padding: 1rem;
				}
			`}
			</style>
			<section>
				<h2>You might be logged in. Who knows?</h2>
			</section>
		</Layout>
	);
};

export default Index;