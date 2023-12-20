import matplotlib.pyplot as plt
import streamlit as st
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'c1': [1, 2, 3, 4],
    'c2': [10, 20, 30, 40],
})
x = np.random.normal(15, 5, 250)

st.caption('[DataFrame]')
st.dataframe(data=df, width=500, height=150)
st.caption('[Table]')
st.table(data=df)
st.caption('[Metric]')
st.metric(label="Temperature", value="28 °C", delta="1.2 °C")

st.caption('[JSON]')
st.json({
    'c1': [1, 2, 3, 4],
    'c2': [10, 20, 30, 40],
})

st.caption('[CHART]')
fig, ax = plt.subplots()
ax.hist(x=x, bins=15)
st.pyplot(fig)