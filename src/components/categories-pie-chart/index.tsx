import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';
import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

const apiData = [
    {
      _id: '1',
      title: "Alimentação",
      amaunt: 30000,
      color: '#016BF8'
    },
    {
        _id: '2',
        title: "Compras",
        amaunt: 50000,
        color: '#ff33bb'
    },
    {
        _id: '3',
        title: "Estudos",
        amaunt: 100000,
        color: '#ff0000', 
        }
    ]

    type ChartData = {
      id: string;
      label: string;
      externalId: string;
      value: number;
      color: string;
    }

    export function CategoriesPieChart() {
        const data = useMemo<ChartData[]>(() => {
            const chartData: ChartData[] = apiData.map((item) => ({
              id: item.title,
              label: item.title,
              externalId: item._id,
              value: item.amaunt,
              color: item.color,
            }));

            return chartData;
        }, []);

        return (
            <ResponsivePie 
               data={data} 
               enableArcLabels={false}
               enableArcLinkLabels={false}
               colors={({data}) => data.color}
               margin={{top: 20}}
               valueFormat={formatCurrency}
               theme={{ text: {
                fontFamily: 'Lexend',
                fontSize: 10,
               },
               tooltip: {
                container: {
                    backgroundColor: theme.colors.black,
                    padding: 16,
                    color: theme.colors.white,
                    fontFamily: 'Lexend',
                    fontSize: 12,
                    borderRadius: 4,
                },
               },
             }}
             legends={[
                {
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: -20,
                    itemHeight: 16,
                    itemWidth: 120,
                    itemTextColor: theme.colors.neutrol,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 10,
                    symbolShape: 'circle'
                }
             ]}
            />

        )
    }