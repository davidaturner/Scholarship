using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            get();

        }

        private void get()
        {
            // GET from API
            string urlstrtest = String.Format("https://jsonplaceholder.typicode.com/posts/1/comments");
            WebRequest requestObjGet = WebRequest.Create(urlstrtest);

            // Set up web request.
            requestObjGet.Method = "GET";
            requestObjGet.Credentials = new NetworkCredential("USERID", "PASSWORD");

            // Set up web response.
            HttpWebResponse responseObjGet = null;
            responseObjGet = (HttpWebResponse)requestObjGet.GetResponse();

            // Stream in the json
            string strresultset = "";
            using (Stream stream = responseObjGet.GetResponseStream())
            {
                using (StreamReader sr = new StreamReader(stream))
                {
                    strresultset = sr.ReadToEnd();
                }
            }

            MessageBox.Show(strresultset);

        }

        private void post()
        {
            // POST from API
            string urlstrtest2 = String.Format("https://jsonplaceholder.typicode.com/posts");
            WebRequest requestObjPost = WebRequest.Create(urlstrtest2);

            // Set up web request.
            requestObjPost.Method = "POST";
            requestObjPost.ContentType = "application/json";

            string postData = "{\"title\":\"testdata\",\"body\":\"testbody\",\"userId\":\"50\"}";

            // Stream in the json
            var strresultset2 = "";
            using (var streamWriter = new StreamWriter(requestObjPost.GetRequestStream()))
            {
                streamWriter.Write(postData);
                streamWriter.Flush();
                streamWriter.Close();


                var httpResponse = (HttpWebResponse)requestObjPost.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    strresultset2 = streamReader.ReadToEnd();
                }
            }

            /*                MessageBox.Show(strresultset2); */
        }
    }
}
