import React from 'react';

interface ListProps {
  data: any[];
}

const List: React.FC<ListProps> = ({ data }) => (
  <div style={{ paddingBottom: '25px' }}>
    <ul style={{ lineHeight: '25px' }}>
      {data?.map((x: any, i: number) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
);

export default List;
