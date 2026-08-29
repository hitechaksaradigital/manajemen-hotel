import { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler);

const primaryColor = '#005f9d';
const primaryFixed = '#d0e4ff';
const secondaryColor = '#7c5800';
const tertiaryColor = '#b8004b';
const outlineColor = '#e2e2e5';
const textColor = '#404751';

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const occupancyData = [65, 72, 85, 80, 92, 95, 88];
const revenueLabels = ['Room', 'F&B', 'Spa', 'Events'];
const revenueData = [28, 12, 3, 2];

ChartJS.defaults.font.family = "'JetBrains Mono', monospace";
ChartJS.defaults.color = textColor;

export default function Charts() {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;
    const plugin = {
      id: 'barColorPlugin',
      beforeDatasetsDraw(chart) {
        const dataset = chart.data.datasets[0];
        if (!dataset) return;
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((bar, index) => {
          const colors = [primaryColor, secondaryColor, tertiaryColor, '#0079c5'];
          bar.options.backgroundColor = colors[index];
        });
      },
    };
    barRef.current.config.options.plugins = barRef.current.config.options.plugins || {};
    ChartJS.register(plugin);
  }, []);

  const commonScales = {
    y: {
      beginAtZero: true,
      grid: { color: outlineColor },
      border: { dash: [4, 4] },
    },
    x: {
      grid: { display: false },
    },
  };

  return (
    <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
      <div className="rounded-xl border border-outline-variant bg-surface p-lg">
        <div className="mb-md flex items-center justify-between">
          <h3 className="font-headline-md text-headline-md text-on-background">Occupancy Trend</h3>
          <select className="rounded border border-outline-variant bg-surface-container-low py-xs px-sm font-label-sm text-label-sm outline-none focus:border-primary text-on-surface-variant">
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>
        </div>
        <div className="h-64 w-full">
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: 'Occupancy %',
                  data: occupancyData,
                  borderColor: primaryColor,
                  backgroundColor: primaryFixed,
                  borderWidth: 3,
                  pointBackgroundColor: primaryColor,
                  pointBorderColor: '#fff',
                  pointBorderWidth: 2,
                  pointRadius: 4,
                  fill: true,
                  tension: 0.4,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: commonScales,
            }}
          />
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface p-lg">
        <div className="mb-md flex items-center justify-between">
          <h3 className="font-headline-md text-headline-md text-on-background">Revenue Analysis</h3>
          <button className="text-primary hover:bg-primary-fixed rounded p-xs transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
        <div className="h-64 w-full">
          <Bar
            ref={barRef}
            data={{
              labels: revenueLabels,
              datasets: [
                {
                  label: 'Revenue (IDR M)',
                  data: revenueData,
                  backgroundColor: [primaryColor, secondaryColor, tertiaryColor, '#0079c5'],
                  borderRadius: 4,
                  barThickness: 32,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: commonScales,
            }}
          />
        </div>
      </div>
    </div>
  );
}
