import streamlit as st

name = st.text_input(label='Nama lengkap', value='')
st.write('Nama: ', name)

text = st.text_area('Feedback')
st.write('Feedback: ', text)

number = st.number_input(label='Umur')
st.write('Umur: ', int(number), ' tahun')

date = st.date_input(label='Tanggal lahir', min_value=datetime.date(1900, 1, 1))
st.write('Tanggal lahir:', date)

uploaded_file = st.file_uploader('Choose a CSV file')
if uploaded_file:
    df = pd.read_csv(uploaded_file)
    st.dataframe(df)

picture = st.camera_input('Take a picture')
if picture:
    st.image(picture)