import numpy as np
import pandas as pd

np.random.seed(42)

# =========================
# CONFIG
# =========================
N = 20000  # number of 15-min samples

# =========================
# GENERATE REALISTIC FEATURES (NO LOOPS)
# =========================

cpu_mean = np.random.uniform(20, 90, N)
cpu_std = np.random.uniform(2, 15, N)

cpu_min = np.clip(cpu_mean - np.random.uniform(5, 20, N), 5, 100)
cpu_max = np.clip(cpu_mean + np.random.uniform(5, 20, N), 5, 100)

freq_mean = np.random.uniform(1.8, 3.5, N)
freq_std = np.random.uniform(0.05, 0.5, N)

temp_mean = 30 + cpu_mean * 0.7 + np.random.normal(0, 3, N)
temp_std = np.random.uniform(1, 6, N)

active_load_mean = np.random.uniform(0.05, 0.5, N)
active_load_std = np.random.uniform(0.01, 0.2, N)

heavy_cpu_mean = cpu_mean * np.random.uniform(0.2, 0.7, N)

bg_load_mean = cpu_mean - heavy_cpu_mean

brightness_mean = np.random.uniform(0.2, 1.0, N)

download_mean = np.random.uniform(1e4, 1e6, N)
upload_mean = np.random.uniform(1e3, 2e5, N)

drain_rate_mean = (
    0.015 * cpu_mean +
    0.02 * temp_mean +
    5 * active_load_mean +
    0.3 * brightness_mean +
    np.random.normal(0, 1, N)
)

drain_rate_mean = np.clip(drain_rate_mean, 0.1, 5)

# =========================
# LABEL (REALISTIC BATTERY DROP)
# =========================

battery_drop_15min = (
    0.8 * drain_rate_mean +
    0.05 * cpu_std +
    0.03 * temp_mean +
    np.random.normal(0, 0.5, N)
)

battery_drop_15min = np.clip(battery_drop_15min, 0, 20)

# =========================
# FINAL DATAFRAME
# =========================
df = pd.DataFrame({
    "cpu_mean": cpu_mean,
    "cpu_std": cpu_std,
    "cpu_min": cpu_min,
    "cpu_max": cpu_max,

    "freq_mean": freq_mean,
    "freq_std": freq_std,

    "temp_mean": temp_mean,
    "temp_std": temp_std,

    "active_load_mean": active_load_mean,
    "active_load_std": active_load_std,

    "heavy_cpu_mean": heavy_cpu_mean,
    "bg_load_mean": bg_load_mean,

    "brightness_mean": brightness_mean,
    "download_mean": download_mean,
    "upload_mean": upload_mean,

    "drain_rate_mean": drain_rate_mean,

    "battery_drop_15min": battery_drop_15min
})

df.to_csv("battery_realistic_hardcoded_dataset.csv", index=False)

print("✅ Dataset generated successfully")
print(df.head())
print(df.shape)