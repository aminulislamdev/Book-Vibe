'use client';

import React, { useContext } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from 'recharts';

import { BookContext } from '@/app/context/BookContext';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  'red',
  'pink',
  'black',
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}

    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const PageToRead = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error(
      'PageToRead must be used inside BookContextProvider'
    );
  }

  const { readBook } = context;

  const data = readBook.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="container mx-auto">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Pages to Read
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Your read books and their total pages
          </p>
        </div>

        {readBook.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">
            <p className="text-xl font-semibold text-gray-500">
              No books added to Read list yet.
            </p>

            <p className="mt-2 text-gray-400">
              Add a book from the Read button to see the chart.
            </p>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-6 shadow-md md:p-10">

            <h2 className="mb-8 text-2xl font-bold text-gray-800">
              Read Books
            </h2>

            <div className="w-full overflow-x-auto">
              <BarChart
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  maxHeight: '70vh',
                  aspectRatio: 1.618,
                }}
                responsive
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  left: 20,
                  bottom: 70,
                }}
              >
                <CartesianGrid />

                <Tooltip
                  cursor={{ fillOpacity: 0.1 }}
                />

                <XAxis
                  dataKey="name"
                  angle={-25}
                  textAnchor="end"
                  interval={0}
                  height={80}
                />

                <YAxis
                  width="auto"
                  label={{
                    value: 'Pages',
                    angle: -90,
                    position: 'insideLeft',
                  }}
                />

                <Bar
                  dataKey="pages"
                  shape={TriangleBar}
                  activeBar
                >
                  <LabelList
                    content={CustomColorLabel}
                    position="top"
                  />
                </Bar>
              </BarChart>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default PageToRead;