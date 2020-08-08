import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

let data = [
  {
    glasses: 'AD',
    braclets: 49,
    bracletsColor: 'hsl(85, 70%, 50%)',
    watches: 176,
    watchesColor: 'hsl(313, 70%, 50%)',
    belt: 116,
    beltColor: 'hsl(238, 70%, 50%)',
    pants: 26,
    pantsColor: 'hsl(328, 70%, 50%)',
    shirt: 83,
    shirtColor: 'hsl(246, 70%, 50%)',
    shoes: 106,
    shoesColor: 'hsl(107, 70%, 50%)',
  },
  {
    glasses: 'AE',
    braclets: 153,
    bracletsColor: 'hsl(269, 70%, 50%)',
    watches: 141,
    watchesColor: 'hsl(337, 70%, 50%)',
    belt: 170,
    beltColor: 'hsl(64, 70%, 50%)',
    pants: 189,
    pantsColor: 'hsl(115, 70%, 50%)',
    shirt: 117,
    shirtColor: 'hsl(217, 70%, 50%)',
    shoes: 21,
    shoesColor: 'hsl(186, 70%, 50%)',
  },
  {
    glasses: 'AF',
    braclets: 89,
    bracletsColor: 'hsl(59, 70%, 50%)',
    watches: 164,
    watchesColor: 'hsl(92, 70%, 50%)',
    belt: 60,
    beltColor: 'hsl(156, 70%, 50%)',
    pants: 84,
    pantsColor: 'hsl(81, 70%, 50%)',
    shirt: 34,
    shirtColor: 'hsl(103, 70%, 50%)',
    shoes: 99,
    shoesColor: 'hsl(281, 70%, 50%)',
  },
  {
    glasses: 'AG',
    braclets: 55,
    bracletsColor: 'hsl(7, 70%, 50%)',
    watches: 76,
    watchesColor: 'hsl(38, 70%, 50%)',
    belt: 23,
    beltColor: 'hsl(20, 70%, 50%)',
    pants: 108,
    pantsColor: 'hsl(169, 70%, 50%)',
    shirt: 172,
    shirtColor: 'hsl(101, 70%, 50%)',
    shoes: 90,
    shoesColor: 'hsl(88, 70%, 50%)',
  },
  {
    glasses: 'AI',
    braclets: 54,
    bracletsColor: 'hsl(90, 70%, 50%)',
    watches: 80,
    watchesColor: 'hsl(333, 70%, 50%)',
    belt: 136,
    beltColor: 'hsl(197, 70%, 50%)',
    pants: 95,
    pantsColor: 'hsl(216, 70%, 50%)',
    shirt: 184,
    shirtColor: 'hsl(270, 70%, 50%)',
    shoes: 87,
    shoesColor: 'hsl(255, 70%, 50%)',
  },
  {
    glasses: 'AL',
    braclets: 18,
    bracletsColor: 'hsl(85, 70%, 50%)',
    watches: 46,
    watchesColor: 'hsl(309, 70%, 50%)',
    belt: 152,
    beltColor: 'hsl(283, 70%, 50%)',
    pants: 12,
    pantsColor: 'hsl(186, 70%, 50%)',
    shirt: 145,
    shirtColor: 'hsl(216, 70%, 50%)',
    shoes: 91,
    shoesColor: 'hsl(260, 70%, 50%)',
  },
  {
    glasses: 'AM',
    braclets: 111,
    bracletsColor: 'hsl(121, 70%, 50%)',
    watches: 173,
    watchesColor: 'hsl(319, 70%, 50%)',
    belt: 8,
    beltColor: 'hsl(211, 70%, 50%)',
    pants: 180,
    pantsColor: 'hsl(356, 70%, 50%)',
    shirt: 74,
    shirtColor: 'hsl(236, 70%, 50%)',
    shoes: 40,
    shoesColor: 'hsl(142, 70%, 50%)',
  },
];

export const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={['braclets', 'watches', 'belt', 'pants', 'shirt', 'shoes']}
    indexBy="glasses"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'shirt',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'belt',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'glasses',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'sales',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
