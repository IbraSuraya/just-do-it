import streamlit as st 

st.markdown(
    """
    # [Markdown] My first app [Markdown]
    [Markdown] Hello, para calon praktisi data masa depan!
    """
)

st.title('[title] Belajar Analisis Data')
st.header('[header] Pengembangan Dashboard')
st.subheader('[subheader] Pengembangan Dashboard')
st.caption('[caption] Copyright (c) 2023')
code = """[code] def hello():
    [code] print("Hello, Streamlit!")"""
st.code(code, language='python')

st.text('[text] Halo, calon praktisi data masa depan.')
st.latex(r"""
    [latex]\sum_{k=0}^{n-1} ar^k =
    a \left(\frac{1-r^{n}}{1-r}\right)
""")