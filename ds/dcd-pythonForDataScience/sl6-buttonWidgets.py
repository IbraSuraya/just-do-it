import streamlit as st

if st.button('Say hello'):
    st.write('Hello there')

agree = st.checkbox('I agree')
notAgree = st.checkbox('I not agree')
if agree:
  st.write('Welcome to MyApp')
else :
  st.write('Not Welcome')

genre = st.radio(
  label="What's your favorite movie genre",
  options=('Comedy', 'Drama', 'Documentary'),
  horizontal=False
)

genre1 = st.selectbox(
  label="What's your favorite movie genre",
  options=('Comedy', 'Drama', 'Documentary')
)

genre2 = st.multiselect(
  label="What's your favorite movie genre",
  options=('Comedy', 'Drama', 'Documentary')
)

values = st.slider(
  label='Select a range of values',
  min_value=0, max_value=100, value=(0, 100))
st.write('Values:', values)