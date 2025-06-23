import { useTheme } from "@mui/material";
import { ResponsiveBar }from "@nivo/bar";
import { tokens }from "../theme";
import { mockBarData as data} from "../data/mockData";


const BarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBar
        
        data={data}
        indexBy="country"
        enableLabel={false}
        labelSkipWidth={5}
        labelSkipHeight={12}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        axisBottom={{ legend: 'country (indexBy)', legendOffset: 32 }}
        axisLeft={{ legend: 'food', legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
    )
}

export default BarChart