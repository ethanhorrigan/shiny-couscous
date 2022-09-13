/* eslint-disable jsx-a11y/label-has-associated-control */
import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function GalleryPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery(['fruits'], getFruits)
	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Vitamin' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((fruit, index) => (
					<Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} index={index} />
				))}
			</div>
			<div className='mb-6'>
				<label
					htmlFor='default-input'
					className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Default input
				</label>
				<input
					type='text'
					id='default-input'
					className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
				/>
			</div>
		</>
	)
}
