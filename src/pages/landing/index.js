/* eslint-disable react/no-array-index-key */
import { memo, useEffect } from 'react';
import { outPuts } from '../../settings/data';

const Landing = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Landing'>
			<div className='overflow-x-auto'>
				<table className='table-zebra table w-full'>
					<thead>
						<tr>
							<th> </th>
							<th>Name</th>
							<th>time</th>
							<th>comment</th>
						</tr>
					</thead>
					<tbody>
						{outPuts.map((e, index) => {
							const { name, time, comment } = e;
							return (
								<tr key={`${e.name}${e.time}${index}`}>
									<th>{index + 1}</th>
									<td>{name}</td>
									<td>{time}</td>
									<td>{comment}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
});
export default Landing;
