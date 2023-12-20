import streamlit as st

st.title('Belajar Analisis Data')
# col1, col2, col3 = st.columns(3)
col1, col2, col3 = st.columns([2, 1, 1])
tab1, tab2, tab3 = st.tabs(["Tab 1", "Tab 2", "Tab 3"])

with st.sidebar:
  st.text('Ini merupakan sidebar')
  
  values = st.slider(
      label='Select a range of values',
      min_value=0, max_value=100, value=(0, 100)
  )
  st.write('Values:', values)

with col1:
  st.header("Kolom 1")
  st.image("https://static.streamlit.io/examples/cat.jpg")
with col2:
  st.header("Kolom 2")
  st.image("https://static.streamlit.io/examples/dog.jpg")
with col3:
  st.header("Kolom 3")
  st.image("https://static.streamlit.io/examples/owl.jpg")

with tab1:
  st.header("Tab 1")
  st.image("https://static.streamlit.io/examples/cat.jpg")

with tab2:
  st.header("Tab 2")
  st.image("https://static.streamlit.io/examples/dog.jpg")

with tab3:
  st.header("Tab 3")
  st.image("https://static.streamlit.io/examples/owl.jpg")