document.getElementById("footerSection").innerHTML = `

<footer id="footer">
			<div class="cs-footer footer-v1 default-footer">
				<div class="footer-top">
					<div class="container">
						<div class="row">
							<div class="col-lg-4  col-md-4  col-sm-6 col-xs-12">
							<div class="logo">
							<a href="../index.html" style="background: #fff; padding: 20px; border-radius: 2px;">
								<img src="../wp-content/themes/jobcareer/assets/images/logo.png"
									style="width:px; height: px;" alt="JobCareer">
							</a>
						</div>
							</div>
							<div class="col-lg-4  col-md-4  col-sm-6 col-xs-12">
								<div class="widget widget_nav_menu">
									<div class="widget-title">
										<h5>Frequently Asked Questions</h5>
									</div>
									<div class="menu-jobcareer-frequently-asked-questions-menu-container">
										<ul id="menu-jobcareer-frequently-asked-questions-menu" class="menu">
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1410">
												<a id="aboutLink" href="../about-us/index.html">About Us</a>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1410">
												<a id="faqsLink" href="../frequently-asked-questions/index.html">FAQ's</a>
											</li>
											<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1411">
												<a id="termsLink" href="../terms-and-policies/index.html">Terms And Policies</a>
											</li>
											<li class="../menu-item menu-item-type-custom menu-item-object-custom menu-item-1415">
												<a id="disclimersLink" href="#">Disclaimers</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-lg-4  col-md-4  col-sm-6 col-xs-12">
								<div class="widget widget-text widget-contact-information">
									<div class="contact-info">
										<div class="widget-title">
											<h5>CONTACT US</h5>
										</div>
										<div class="widgettext">

											<address>
												<span>
													Address: Schönhaus er Allee 167c 10435 Berlin, Germany<br />Phone:
													+12139907<br>
													Email: info@yoursite.com </span>
											</address>
											<ul class="social-media">
												<li><a href="#" data-original-title="facebook"><i class="icon-facebook7"></i></a>
												</li>
												<li><a href="#" data-original-title="twitter"><i class=" icon-twitter6"></i></a>
												</li>
												<li><a href="#" data-original-title="instagram"><i class="icon-instagram"></i></a>
												</li>
												<li><a href="#" data-original-title="youtube"><i class="icon-youtube"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="background-color:#1e1f21;" class="cs-copyright">
					<div class="container">
						<div class="cs-copyright-area">
							<div class="row">
								<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">

									<div class="footer-links">
										© 2023 JobCareer All rights reserved. Design by <a class="&#039;cs-color&#039;"
											href="index.html#&#039;">Chimp Studio</a>
									</div>
								</div>
								<div class="col-md-3">
									<div class="back-to-top">
										<a href="javascript:void(0);" style="color:#fff;">Back to top<i class="icon-arrow-up7"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<!-- Add Section  -->
		<div class="addSection">
			<div class="row verticalAds">
				<img src="../img/verticalAds.png" alt="Adds" srcset="">
			</div>
			<ion-icon name="close-circle-outline" class="deleteButton"></ion-icon>
	
		</div>
		
	
`;
let deleteButton = document.querySelector(".deleteButton");
let addSection = document.querySelector(".addSection");

deleteButton.addEventListener("click", function () {
  addSection.setAttribute("style", "display: none !important;");
  setTimeout(function () {
    addSection.removeAttribute("style", "display: none !important;");
  }, 60000);
});
