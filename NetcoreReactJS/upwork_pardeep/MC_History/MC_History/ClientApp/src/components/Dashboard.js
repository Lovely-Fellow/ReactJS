import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import '../HeaderStyles.css';
import '../NavStyles.css';
import '../style.css';
export class Dashboard extends Component {


    render() {
        return (
           
 

<div>
<form id="frmMain" method="post" runat="server">

    <input type="hidden" name="txtMode" />
        <input type="hidden" name="txtDelete" />
            <input type="hidden" name="txtOriginal" />
                <input type="hidden" name="txtSource" />
                    <input type="hidden" name="txtRecID" />

                        <table cellspacing="0" cellpadding="2" border="0" width="100%">
		<tr>
                            <td width="98%" valign="top">

                                                {/*<!-- heading -->*/}
				<table cellspacing="0" width="100%">
                                    <tr>
                                        <td>


                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                <tr>
                                                    <td width="99%" class="headerTD">
                                                        MORNING CALL - NEWS ADMINISTRATION
                                {/*<!--Below line are commented to support new minor cosmetics
                                                            like hiding Group name , you can display the group name by UNcommenting below lines-->
								<% 'If Session.Item("Group") <> "" Then %>
								<!--(--> <% '=Ucase(Session.Item("Group")) %><!--)-->
								<% 'Else %>
								<!--(NO GROUP)-->
								<% 'End If %>*/}
                                                        
                                                        
							</td>
                                                        <td width="1%" align="right" valign="top" nowrap>

                                                                        {/*<!--
								<button tabindex="-1" onclick="launchWindow('MC_Earnings.aspx','Earnings',1000,600,'no','no','yes','yes','yes','no','yes');" style="WIDTH:150px;font-family:Arial;font-size:8pt;font-weight:bold" type=button>EARNINGS CALENDAR</button>&nbsp;
                                                            -->
                                                        
								&nbsp;&nbsp;<button class="button" tabindex="-1" onclick="launchWindow('MC_ReportMenu.aspx','ReportMenu',500,300,'no','no','no','yes','yes','no','yes')" style="WIDTH:75px;font-family:Arial;font-size:8pt;font-weight:bold" type=button>REPORTS</button>&nbsp;<button tabindex="-1" onclick="return false;" style="WIDTH:60px;font-family:Arial;font-size:8pt;font-weight:bold" type=button class="button">HOME</button>

                                                            <!--
								<img onclick="window.close()" style="CURSOR:hand" src="/images/icon-close.bmp">
                                                                &nbsp;
                                                                -->*/}
                                                            	
							</td>
						</tr>
						</table>
						
						</td>
					</tr>
				</table>

                                        <hr/>
                                                    {/*  <!-- end heading -->
                                        
	<% If boolDisplay %>
                                        
	<!-- ///// main ///// -->*/}
	<div id="divMain">

                                                        {/*   <!-- ///// Ticker Region ///// -->*/}
	<div id="regionTicker">
                                                            {/*  <script>
                                                        function checkforNoneVal(txtb) {

	            if (txtb.value == "") {
                                                            txtb.value = '';
                                                        }
                                                    }
                                                   
	        function checkforCurrencyTicker(txtb) {

                //alert(txtb.value);
                  
	            if (txtb.value.toUpperCase() == 'NOK') {
                                                            txtb.value = 'NOK_T';
                                                        }
                                        
	            if (txtb.value.toUpperCase() == 'YUM') {
                                                            txtb.value = 'YUM_T';
                                                        }
                                        
	            if (txtb.value.toUpperCase() == 'BTN') {
                                                            txtb.value = 'BTN_T';
                                                        }
                                        
	            if (txtb.value.toUpperCase() == 'CLF') {
                                                            txtb.value = 'CLF_T';
                                                        }
                                        
	            if (txtb.value.toUpperCase() == 'BAM') {
                                                            txtb.value = 'BAM_T';
                                                        }
                                        
	            if (txtb.value.toUpperCase() == 'SCR') {
                                                            txtb.value = 'SCR_T';
                                                        }
                                        
	            if (txtb.value.toUpperCase() == 'AMD') {
                                                            txtb.value = 'AMD_T';
                                                        }
                                        
                                                    }
                                                   
                                                   
	    </script>*/}

                                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td width="1%" valign="top">

                                                                <table border="0" cellpadding="1" cellspacing="0">
                                                                    <tr>
                                                                        <td width="100" class="formfield" nowrap>PRIMARY TICKER:</td>
                                                                        <td>

                                                                <input tabindex="1"
                                                                    onKeyUp="checkforCurrencyTicker(frmMain.txtTicker); triggerPositions()"
                                                                    onkeydown="return handleENTER(event,this)"
                                                                    type="text"
                                                                    name="txtTicker"
                                                                    onfocus="checkforNoneVal(frmMain.txtTicker); frmMain.txtTicker.style.color = '#000000';"
                                                                    onblur="exitPrimary()"
                                                                    maxlength="50"
                                                                    class="textbox"
                                                                    style={{ WIDTH: "120px" }}></input>&nbsp;
                                                                        	
							</td>
                                                                            <td valign="top" align="left">

                                                                                        {/* <!--
                                                                        
								<img src="images/downarrow.gif" onclick="showPositions();">&nbsp;
							</td>
                                                                                <td nowrap>

                                                                                    -->*/}
                                                                                
								<table border="0" cellpadding="0" cellspacing="0" width="130px"><tr><td>

                                                                    <div id="divTickerList" style={{ position: "absolute", display: "none", visibility: "hidden", width: "150px", padding: "0px" }}>

                                                                                            <table cellspacing="0" class="datatable" width="1">
                                                                                                <tr class="datacolumnTR">
                                                                                                    <td class="datacolumnTD" nowrap width="100%">
                                                                                                        CURRENT POSITIONS
									</td>
                                                                                                </tr>
                                                                                                <tr>

                                                                                <td class="datacolumnTD" nowrap width="100%" style={{ padding: "0px" }}>

                                                                                                        <select name="selTickers" size="10"
                                                                                                        class="textbox"
                                                                                                        style="font-weight:bold;font-color:navy;width:100%"
                                                                                                        onclick="selectFromList()">
                                                                                                
                                                                                        {/*<asp: repeater id="rptPositions" runat="server">*/}
										<itemtemplate>
                                                                                                                {/*                <option value="<%#DataBinder.Eval(Container.DataItem," Ticker") %>"><%#DataBinder.Eval(Container.DataItem,"Ticker") %></option>*/}
										</itemtemplate>
                                                                                        {/*</asp: repeater>*/}
                                                                                        	
									</select>
									
									</td>
									</tr>
									</table>
								
									

								</div>

                                                                                        <input tabindex="-1" name="btnRelated" type="button" class="button" value="ALL POSITIONS" style="WIDTH:120px" onclick="showAllPositions()">
                                                                                        </input>


                                                                                            {/*<!--
								<span id="spanSearch" style="DISPLAY:none;WIDTH:100%">
                                                                                            <select name="selTickers2" class="select" style="WIDTH:160px" onchange="setTicker(this.value)">
                                                                                                <option value="" selected>Select Position ...</option>

                                                                                                <asp: repeater id=rptPositions2 runat="server">
									<itemtemplate>
                                                                                                    <option value="<%#DataBinder.Eval(Container.DataItem," Ticker") %>"><%#DataBinder.Eval(Container.DataItem,"Ticker") %></option>
									</itemtemplate>
									</asp: repeater>
                                                                                    	
								</select>
								</span>

                                                                                -->*/}
                                                                            
								        </td>
								    </tr>
								</table>

                                                                                {/*<!--
								<span id="spanPositions" style="WIDTH:160px" class="text">
                                                                        &nbsp;&nbsp;Select Position
								</span>

                                                                    -->*/}
                                                                	
							</td>
						</tr>
                                                            <tr>
                                                                <td class="formfield" nowrap>RELATED TICKER(S):</td>
                                                                <td>
                                                                    <input tabindex="-1"
                                                                        onkeydown="checkforCurrencyTicker(frmMain.txtRelated); return handleENTER(event,this)"
                                                                        type="text"
                                                                        name="txtRelated"
                                                                        onfocus="checkforNoneVal(frmMain.txtRelated); frmMain.txtRelated.style.color = '#000000';"
                                                                        onblur="exitRelated()"
                                                                        maxlength="255"
                                                                        class="textbox"
                                                                        style="WIDTH:120px"></input>&nbsp;
							</td>

                                                                    <td class="text">
                                                                        <input tabindex="-1" name="btnRelated" type="button" class="button" value="RELATED DETAILS" style="WIDTH:120px" onclick="showRelatedProperties()"></input>
							</td>
						</tr>


                                                                    <tr>
                                                                        <td class="formfield" nowrap>RELATED TICKER GROUPS:</td>
                                                                        <td>
                                                                            <select tabindex="-1" name="selTickerGroups" class="select" style="WIDTH:120px" onchange="updateRelatedTickersFromGroup()">

                                                                                <option value="">Select Group ...</option>

                                                                    {/*<asp: repeater id="rptTickergroups" runat="server">*/}
									<itemtemplate>
                                                                                        {/*<option value="<%#DataBinder.Eval(Container.DataItem," TickerGroupId") %>"><%#DataBinder.Eval(Container.DataItem, "TickerGroupName")%></option>*/}
									</itemtemplate>
                                                                    {/*</asp: repeater>*/}
                                                                    	
								</select>
                                                                </td>

                                                                <td class="text">
                                                                    &nbsp;
							</td>
                                                            </tr>

                                                                    {/*<!--
						<tr>
                                                                <td class="formfield" nowrap>Reports:</td>
                                                                <td></td>
                                                                <td colspan="2" class="text">&nbsp;(Print/E-Mail)</td>
                                                            </tr>
                                                            -->*/}
					</table>
					
				</td>
                                                            {/*  <%--				<td width="99%">

                                                        &nbsp;
                                                
				</td>

                                                    <td width="1%" nowrap>
                                                        &nbsp;&nbsp;&nbsp;
				</td>

                                                    --%>	*/}			<td valign="top" width="100%" align="left">

                                                        <div id="divProperties">
                                                            <iframe
                                                                frameborder="no"
                                                                marginheight="0"
                                                                marginwidth="0"
                                                                vspace="0"
                                                                hspace="0"
                                                                width="600"
                                                                height="90"
                                                                name="iProperties"
                                                                id="iProperties"
                                                                src="MC_PositionProperties.aspx"
                                                                style="scrolling='no'"
                                                            >
                                                            </iframe>
                                                        </div>
                                                    </td>
				
			</tr>
		</table>

                                            <hr></hr>				
	</div>
                                                {/* <!-- ///// End Ticker Region ///// -->*/}
                                        
                                        
                                        
                                                {/*<!-- ///// News Region ///// -->*/}
                                                <div id="regionNews" >
                                        
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td width="1%" valign="top">

                                                        <table border="0" cellpadding="0" cellspacing="2" width="100%">
                                                            <tr><td class="headerTD">NEWS PROPERTIES</td></tr>
                                                                </table>{/*<!-- <hr> -->*/}
                                                            
                                                                {/*<!-- ///// news item properties ///// -->*/}
					<table width="260" border="0" cellpadding="2" cellspacing="0">
                                                                <tr>
                                                                    <td width="1%" nowrap class="formfield" >CLASSIFICATION:&nbsp;</td>
                                                                    <td class="formfield">
                                                                        <input onkeydown="return handleENTER(event,this)" tabindex="-1" type="text" name="txtClassification" onfocus="checkforNoneVal(frmMain.txtClassification); checkForDisabled()" maxlength="50" value="" onblur="exitClassification()" class="textbox" style="WIDTH:100%"></input>
							</td>
						</tr>
                                                                    <tr>
                                                                        <td width="1%" nowrap class="formfield" >NEWS TYPE:&nbsp;</td>
                                                                        <td>
                                                                            <select tabindex="2" name="selNewsType" class="select" style="WIDTH:100%">

                                                                                <option value="">Select News Type ...</option>

                                                                    {/*<asp: repeater id="rptNewsTypes" runat="server">*/}
									<itemtemplate>
                                                                                    {/*                                   <option value="<%#DataBinder.Eval(Container.DataItem," NewsCode") %>"><%#DataBinder.Eval(Container.DataItem,"CodeDesc") %></option>*/}
									</itemtemplate>
                                                                    {/*</asp: repeater>*/}
                                                                    	
								</select>
							</td>
						</tr>
                                                            <tr>
                                                                <td class="formfield" nowrap>NEWS DATE:</td>
                                                                <td>

                                                                    <table border="0" cellpadding="0" cellspacing="0">
                                                                        <tr>
                                                                            <td>
                                                                            {/*<asp: TextBox runat="server" tabindex="-1" CssClass="textbox" ID="txtDate"/>*/}
								</td>
                                                                            <td nowrap>&nbsp;<a tabindex="-1" href="javascript:cal.popup();"><img src="includes/Calendar/img/cal.gif" width="16" height="16" border="0" alt="Show Calendar"></img></a></td>
								</tr>
								</table>
							
								
							</td>
						</tr>

                                                                <tr>
                                                                    <td colspan="2"><hr></hr></td>
						</tr>

                                                                    <tr>
                                                                        <td colspan="2">

                                                                            <table border="0" cellpadding="0" cellspacing="0">

                                                                            {/*<% If strDuplicate Is Nothing = False %>
									<% Dim i as Integer %>
									<% For i = LBound(strDuplicate) To UBound(strDuplicate) %>
                                                                            
									<tr>
                                                                                    <td class="formfield" width="1%" nowrap>
                                                                                        <input name="chkDuplicate<%=strDuplicate(i)%>" type="checkbox" value="True">&nbsp;
										</td>
                                                                                        <td class="formfield" width="99%" nowrap>
                                                                                            DUPLICATE FOR <% =UCase(strDuplicate(i)) %>
										</td>
									</tr>

                                                                                    <% Next i %>
									<% End If %>*/}
                                                                                	
								</table>
								
							</td>
						</tr>

                                                                        <tr>
                                                                            <td colspan="2"><hr/></td>
						</tr>
						
					</table>
                                                            {/*<!-- ///// end news item properties ///// -->*/}
                                                    
				</td>
                                                                    <td width="1%" nowrap valign="top">
                                                                        &nbsp;&nbsp;&nbsp;
				</td>
                                                                    <td width="98%" nowrap valign="top">

                                                                        <table border="0" cellpadding="0" cellspacing="2" width="100%">
                                                                            <tr><td class="headerTD">NEWS CONTENT</td></tr>
                                                            </table>{/*<!-- <hr> -->*/}
                                                                    
					<table border="0" height="200" width="100%">
                                                                                <tr valign="top">
                                                                                    <td>
                                                                        {/*<!-- NEWS TEXT BOX -->*/}
								<textarea tabindex="3"
                                                                                            onkeydown="return handleTAB(event,this)"
                                                                                            onkeyup="spanLength.innerHTML=this.value.length"
                                                                                            style="PADDING-RIGHT:3px;PADDING-LEFT:3px;PADDING-BOTTOM:3px;WIDTH:100%;PADDING-TOP:3px;HEIGHT:190"
                                                                                            class="select"
                                                                                            name="txtNews"></textarea>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
					
					
				</td>
			</tr>

                                                                    <tr>
                                                                        <td>

                                                                            <span id="spanBtnExpand" style="display:none">
                                                                                <button tabindex="-1" style="width:120px" id="btnExpand" class="button" onclick="window.location='MC_News.aspx?Ticker='+frmMain.txtTicker.value+'&Expanded=True';" type="button">EXPAND NEWS</button>
                                                                            </span>

                                                                        </td>
                                                                        <td>&nbsp;</td>
                                                                        <td nowrap align="center">

                                                                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                                                <tr>
                                                                                    <td align="left" width="1%" nowrap>
                                                                                        &nbsp;<button tabindex="-1" class="button" onclick="clickClear()" style="WIDTH:80px" type="button">CLEAR</button>
                                                                                    </td>


                                                                                    <td align="center" class="formfield" width="98%">
                                                                        <font color="gray">CURRENT LENGTH:&nbsp;</font><span id="spanLength">0</span>{/*<font color="gray"> OF <% =Application.Item("MAX_NEWS_LENGTH") %> CHARACTERS</font>*/}
                                                                                    </td>

                                                                                    <td align="right" width="1%" nowrap>
                                                                                        <button tabindex="-1" class="button" onclick="saveNews()" style="WIDTH:80px" type="button">SAVE</button>&nbsp;
					</td>
                                                                                </tr>
                                                                            </table>

                                                                        </td>
                                                                    </tr>
			
		</table>

                                                                <hr/>
	</div>
                                            {/*<!-- ///// End News Region ///// -->*/}
                                                            
                                            {/*<!-- ///// History Region ///// -->*/}
	<table border="0" height="<% =intHistoryHeight+60.ToString %>" width="100%" cellpadding="0" cellspacing="0"><tr><td valign="top">
                                                                    <div id="regionHistory">

                                                    {/*<% If boolExpanded = True Then %>
		<button class="button" onclick="window.location='MC_News.aspx?Ticker='+frmMain.txtTicker.value+'&Expanded=False';" style="WIDTH:120px" type=button>POST NEWS</button>
                                                                        <hr>
                                                                            <% End If %>*/}
                                                                    
                                                    {/*<!-- ///// today's news items ///// -->*/}
		<div id="divNewsContainer">
                                                                                <div id="divNews" style="DISPLAY:none">

                                                            {/*<!--
		<table border="0" cellpadding="0" cellspacing="2" width="100%">
                                                                                        <tr>
                                                                                            <td class=headerTD>NEWS <span id="spanHistoryTicker"></span></td>
                                                                                        </tr>
                                                                                    </table><hr>
                                                                                        -->*/}
                                                                                    
		<iframe name="iHistory" id="iHistory" src="MC_NewsHistory.aspx" style="width:100%;HEIGHT:<% =intHistoryHeight.ToString %>;padding:0px;" frameborder="no" scrolling="auto">
                                                            </iframe>
			
 	    </div>
 	    </div>

                                                                                </div>
	</td></tr></table>
                                            {/*<!-- ///// End History Region ///// -->*/}
                                                                	
	</div>
                                        {/*<!-- ///// end main ///// -->*/}
                                                                
                                        {/*<% End If %>*/}
     
			</td>
		</tr>
	</table>
                            {/*  <!-- close header table -->*/}
                                                        
                                                        
                                                        
                                                        
                            {/*<!-- ///// shadow layer ///// -->*/}
	<div id="divShadow" style="WIDTH:500px;HEIGHT:500px" class="shadow">
                                                            </div>
                            {/*<!-- ///// end shadow layer ///// -->*/}
                                                        
	{/*<!-- ///// delete layer ///// -->*/}
	<div id="divDeletePosition" style="WIDTH:400px;HEIGHT:160px" class="popupDIV">

                                                                <table cellpadding="2" cellspacing="1" class="popupTABLE" height="100%">
                                                                    <tr height="1%">
                                                                        <td class="popupTITLE">

                                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                <tr>
                                                                                    <td width="99%" class="popupTITLE">&nbsp;DELETE POSITION <span id="spanDelete"></span></td>
                                                                                    <td width="1%" align="right" class="popupTITLE"><img onclick="hidePopup(divDeletePosition)" style="CURSOR:hand" src="/images/icon-close.bmp"/>&nbsp;</td>
						</tr>
					</table>
					
				</td>
			</tr>
                                                                        <tr height="99%">
                                                                            <td class="popupBODY">

                                                                                <table border="0" cellpadding="2" align="center" width="100%">
                                                                                    <tr>
                                                                                        <td align="center" class="popuptext">

                                                                                            ARE YOU SURE YOU WANT TO DELETE THIS POSITION?
                                                                                    
							</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" nowrap>
                                                                                            <br/>
                                                                                                <input type="button" class="button" value="DELETE" style="WIDTH:80px" onclick="submitDelete()"></input>
                                                                                                    &nbsp;
								<input type="button" class="button" value="CANCEL" style="WIDTH:80px" onclick="hidePopup(divDeletePosition)"></input>
							</td>
						</tr>
						
					</table>

                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
		
		
	</div>
                        {/* <!-- ///// end delete layer ///// -->*/}
                                                                        
                        {/*<!-- ///// confirm popup layer ///// -->*/}
	<div id="divConfirm" style="WIDTH:240px;HEIGHT:200px" class="popupDIV">

                                                                                <table cellpadding="2" cellspacing="1" class="popupTABLE" height="100%">
                                                                                    <tr height="1%">
                                                                                        <td class="popupTITLE">

                                                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="99%" class="popupTITLE">&nbsp;<span id="spanConfirmTitle"></span>&nbsp;</td>
                                                                                                    <td width="1%" align="right" class="popupTITLE"><img onclick="hidePopup(divConfirm)" style="CURSOR:hand" src="/images/icon-close.bmp"/>&nbsp;</td>
						</tr>
					</table>
					
				</td>
			</tr>
                                                                                        <tr height="99%">
                                                                                            <td class="popupBODY">

                                                                                                <table border="0" cellpadding="2" align="center" width="100%">
                                                                                                    <tr>
                                                                                                        <td align="center" class="popuptext">

                                                                                                            <span id="spanConfirmMessage"></span>

                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="center" nowrap>
                                                                                                            <br/>
                                                                                                                <input name="btnConfirmYes" type="button" class="button" value="CONFIRM" style="WIDTH:80px" onclick="hidePopup(divConfirm)"/>
                                                                                                                    &nbsp;
								<input name="btnConfirmNo" type="button" class="button" value="CANCEL" style="WIDTH:80px" onclick="hidePopup(divConfirm)"/>
							</td>
						</tr>
						
					</table>

                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
		
		
	</div>
                        {/*<!-- ///// end confirm popup layer ///// -->*/}
                                                                                        
                        {/*<!-- ///// msgbox popup layer ///// -->*/}
	<div id="divMsgBox" style="WIDTH:240px;HEIGHT:200px" class="popupDIV">

                                                                                                <table cellpadding="2" cellspacing="1" class="popupTABLE" height="100%">
                                                                                                    <tr height="1%">
                                                                                                        <td class="popupTITLE">

                                                                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                                <tr>
                                                                                                                    <td width="99%" class="popupTITLE">&nbsp;<span id="spanMsgBoxTitle"></span>&nbsp;</td>
                                                                                                                    <td width="1%" align="right" class="popupTITLE"><img onclick="hidePopup(divMsgBox)" style="CURSOR:hand" src="/images/icon-close.bmp"/>&nbsp;</td>
						</tr>
					</table>
					
				</td>
			</tr>
                                                                                                        <tr height="99%">
                                                                                                            <td class="popupBODY">

                                                                                                                <table border="0" cellpadding="2" align="center" width="100%">
                                                                                                                    <tr>
                                                                                                                        <td align="center" class="popuptext">

                                                                                                                            <span id="spanMsgBoxMessage"></span>

                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td align="center" nowrap>
                                                                                                                            <br/>
                                                                                                                                <input name="btnMsgBox" type="button" class="button" value="CLOSE" style="WIDTH:80px" onclick="hidePopup(divMsgBox)"/>
							</td>
						</tr>
						
					</table>
				
				</td>
			</tr>
		</table>
		
		
	</div>
                        {/*<!-- ///// end msgbox layer ///// -->*/}
                                                                                                    
                                                                                                    
{/*	<!-- ///// reports popup layer ///// -->*/}
	<div id="divReports" style="WIDTH:600px;HEIGHT:300px" class="popupDIV">

                                                                                                            <table cellpadding="2" cellspacing="1" class="popupTABLE" height="100%">
                                                                                                                <tr height="1%">
                                                                                                                    <td class="popupTITLE">

                                                                                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                                            <tr>
                                                                                                                                <td width="99%" class="popupTITLE">&nbsp;GENERATE REPORTS&nbsp;</td>
                                                                                                                                <td width="1%" align="right" class="popupTITLE"><img onclick="hidePopup(divReports)" style="CURSOR:hand" src="/images/icon-close.bmp"/>&nbsp;</td>
						</tr>
					</table>
					
				</td>
			</tr>
                                                                                                                    <tr height="99%">
                                                                                                                        <td class="popupBODY">


                                                                                                                            <table border="1" cellpadding="2" width="100%">
                                                                                                                                <tr>
                                                                                                                                    <td width="50%">

                                                                                                                                        <table border="1" cellpadding="2" width="100%">
                                                                                                                                            <tr><td align="center"><input type="button" class="button" value="VIEW/PRINT REPORT" style="WIDTH:150px" onclick="showReport('')"/></td></tr>
                                                                                                                                                <tr><td align="center"><input type="button" class="button" value="TRADER E-MAIL" style="WIDTH:150px" onclick="showReport('Trader')"/></td></tr>
                                                                                                                                                    <tr><td align="center"><input type="button" class="button" value="FUND GROUP E-MAIL" style="WIDTH:150px" onclick="showReport('Group')"/></td></tr>
                                                                                                                                                        <tr><td align="center"><br/><input type="button" class="button" value="CANCEL" style="WIDTH:150px" onclick="hidePopup(divReports)"/></td></tr>
								</table>
							
							</td>
                                                                                                                                                        <td width="50%">

                                                                                                                                                            <table border="1" cellpadding="2" width="100%">
                                                                                                                                                                <tr><td align="center"><input type="button" class="button" value="VIEW/PRINT REPORT" style="WIDTH:150px" onclick="showReport('')"/></td></tr>
                                                                                                                                                                    <tr><td align="center"><input type="button" class="button" value="TRADER E-MAIL" style="WIDTH:150px" onclick="showReport('Trader')"/></td></tr>
                                                                                                                                                                        <tr><td align="center"><input type="button" class="button" value="FUND GROUP E-MAIL" style="WIDTH:150px" onclick="showReport('Group')"/></td></tr>
                                                                                                                                                                            <tr><td align="center"><br/><input type="button" class="button" value="CANCEL" style="WIDTH:150px" onclick="hidePopup(divReports)"/></td></tr>
								</table>	
							
							</td>
                                                                                                                                                                        </tr>
					</table>
				
				</td>
			</tr>
		</table>
		
		
	</div>
                                                                                                                                                    {/*<!-- ///// end reports layer ///// -->*/}
                                                                                                                                                
                        {/*<!-- ///// related popup layer ///// -->*/}
	<div id="divRelated" style="WIDTH:600px;HEIGHT:300px" class="popupDIV">

                                                                                                                                                        <table cellpadding="2" cellspacing="1" class="popupTABLE" height="100%">
                                                                                                                                                            <tr height="1%">
                                                                                                                                                                <td class="popupTITLE">

                                                                                                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                                                                                        <tr>
                                                                                                                                                                            <td width="99%" class="popupTITLE">&nbsp;RELATED TICKER DETAILS&nbsp;</td>
                                                                                                                                                                            <td width="1%" align="right" class="popupTITLE"><img onclick="hidePopup(divRelated)" style="CURSOR:hand" src="/images/icon-close.bmp"/>&nbsp;</td>
						</tr>
					</table>
					
				</td>
			</tr>
                                                                                                                                                                <tr height="99%">
                                                                                                                                                                    <td class="popupBODY">

                                                                                                                                                                        <iframe name="iRelated" id="iRelated" src="MC_RelatedProperties.aspx" style="width:100%;HEIGHT:260;padding:0px;" frameborder="no" scrolling="no">
                                                                                                                                                                        </iframe><hr/>

                                                                                                                                                                            <table border="0" cellpadding="2" width="100%">
                                                                                                                                                                                <tr><td align="center"><input type="button" class="button" value="CLOSE WINDOW" style="WIDTH:150px" onclick="hidePopup(divRelated)"/></td></tr>
					</table>
				
				</td>
			</tr>
		</table>
		
		
	</div>
                        {/*<!-- ///// end related layer ///// -->*/}
                                                                                                                                                            
                        {/*<!-- ///// positions/tickers popup layer ///// -->*/}
	<div id="divPositions" style="WIDTH:200px;HEIGHT:300px;display:none">

                                                                                                                                                                    <table cellpadding="2" cellspacing="1" height="100%">
                                                                                                                                                                        <tr height="1%">
                                                                                                                                                                            <td class="popupTITLE">

                                                                                                                                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                                                                                                    <tr>
                                                                                                                                                                                        <td width="99%" class="popupTITLE">&nbsp;RELATED TICKER DETAILS&nbsp;</td>
                                                                                                                                                                                        <td width="1%" align="right" class="popupTITLE"><img onclick="hidePopup(divRelated)" style="CURSOR:hand" src="/images/icon-close.bmp"/>&nbsp;</td>
						</tr>
					</table>
					
				</td>
			</tr>
                                                                                                                                                                            <tr height="99%">
                                                                                                                                                                                <td class="popupBODY">

                                                                                                                                                                                    <iframe name="iRelated" id="iRelated" src="MC_RelatedProperties.aspx" style="width:100%;HEIGHT:260;padding:0px;" frameborder="no" scrolling="no">
                                                                                                                                                                                    </iframe><hr/>

                                                                                                                                                                                        <table border="0" cellpadding="2" width="100%">
                                                                                                                                                                                            <tr><td align="center"><input type="button" class="button" value="CLOSE WINDOW" style="WIDTH:150px" onclick="hidePopup(divRelated)"/></td></tr>
					</table>
				
				</td>
			</tr>
		</table>
		
		
	</div>
                        {/* <!-- ///// end positions/tickers layer ///// -->*/}
                                                                                                                                                                        
                                                                                                                                                                        
                        {/*<!-- //// Wait Layer ///// -->*/}
<div id="divWait" style="DISPLAY:none">
                                                                                                                                                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" height="300"><tr><td class="wait" align="center" valign="middle">PLEASE WAIT ...</td></tr></table>
                                                                                                                                                                            </div>
		 
</form>
                    </div>



                   );
    }
}

export default Dashboard;