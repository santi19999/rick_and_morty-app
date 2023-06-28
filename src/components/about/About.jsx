const About = () => {
	return (
		<div>
			<div className="card">
				<h2>About</h2>
				<div className="headerCard">
					<img
						src="https://xsgames.co/randomusers/avatar.php?g=male
"
						alt=""
						width="300px"
					/>
				</div>
				<div className="bodyCard">
					<h3>Sobre Mi</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
						culpa voluptatem, ducimus eligendi cupiditate tenetur, aperiam omnis
						tempora doloribus consequuntur voluptate. Natus, temporibus
						corporis. Id ullam blanditiis vel distinctio esse?
					</p>
				</div>
				<div className="foterCard">
					<ul>
						<li>
							<img
								src="../../assets/icons/icons8-github.svg"
								alt=""
								width={50}
							/>
						</li>
						<li>
							<img
								src="../../assets/icons/icons8-linkedin.svg"
								alt=""
								width={50}
							/>
						</li>
						<li>
							<img
								src="../../assets/icons/icons8-facebook.svg"
								alt=""
								width={50}
							/>
						</li>
						<li>
							<img
								src="../../assets/icons/icons8-instagram.svg"
								alt=""
								width={50}
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
