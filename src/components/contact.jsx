import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id='contact'>
          <div className='container'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                 
                  <iframe
                    src='https://docs.google.com/forms/d/e/1FAIpQLSclgjWZpiaSCWE5gNdiieohqxLR03S2tH7_-NcDnXrnfZHEFQ/viewform?embedded=true'
                    width='100%'
                    height='673'
                    frameborder='0'
                    marginheight='0'
                    marginwidth='0'
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-md-offset-1 contact-info'>
              <div className='contact-item'>
                <h3>Información de contacto</h3>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Dirección
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Teléfono
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                   
                    <li>
                      <a href={this.props.data ? this.props.data.linkedin : "/"}>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.whatsapp : "/"}
                      >
                        <i className='fa fa-whatsapp'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.instagram : "/"}
                      >
                        <i className='fa fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='footer'>
          <div className='container text-center'>
            <p>2020 Kie Technologies todos los derechos reservados</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
