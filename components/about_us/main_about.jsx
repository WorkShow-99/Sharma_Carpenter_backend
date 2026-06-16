import React from 'react';

const MainAbout = () => {
	return (
		<section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
			<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
				<div className="space-y-6">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
						About Us
					</p>
					<h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
						Crafting Quality Carpentry With Precision And Care
					</h1>
					<p className="text-base leading-7 text-gray-600 md:text-lg">
						Sharma Carpenter delivers reliable carpentry solutions for homes and businesses.
						From custom furniture and modular installations to repairs and finishing work,
						we focus on detail, durability, and a clean professional finish.
					</p>
					<p className="text-base leading-7 text-gray-600 md:text-lg">
						Our team works closely with every client to understand their needs and provide
						tailored workmanship that brings ideas to life.
					</p>

					<div className="grid gap-4 sm:grid-cols-2">
						<div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
							<h3 className="text-lg font-semibold text-gray-900">Expert Craft</h3>
							<p className="mt-1 text-sm text-gray-600">
								Skilled workmanship in every project.
							</p>
						</div>
						<div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
							<h3 className="text-lg font-semibold text-gray-900">Trusted Service</h3>
							<p className="mt-1 text-sm text-gray-600">
								Timely delivery and dependable support.
							</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="overflow-hidden rounded-3xl bg-amber-100 shadow-lg">
						<div className="flex h-[320px] items-center justify-center bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-50 p-8 md:h-[420px]">
							<div className="text-center">
								<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/80 shadow-md">
									<span className="text-3xl font-bold text-amber-800">SC</span>
								</div>
								<h2 className="text-2xl font-bold text-gray-900">Sharma Carpenter</h2>
								<p className="mt-2 text-gray-700">Woodwork • Interiors • Repairs</p>
							</div>
						</div>
					</div>

					<div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-3 shadow-lg">
						<p className="text-sm font-medium text-gray-700">
							Quality work, lasting value.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainAbout;


