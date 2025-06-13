import {
	Calendar,
	MapPin,
	Clock,
	Gift,
	CheckCircle,
	Apple,
	CalendarPlus,
	CircleParking,
	Map,
    ListCheck,
} from "lucide-react"

import invitation from "../assets/invitation.png"

export default function Info() {
	return (
		<section id="invite-section" className="py-12 px-4">
			<div className="max-w-5xl mx-auto">
				<div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-stone-200">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						{/* Invite Image */}
						<div className="space-y-6">
							{/* <h2 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
									<Heart className="text-green-600" size={24} />
									Our Invitation
								</h2> */}
							<img
								src={invitation}
								alt="invitation"
								className="invitation border border-stone-200 rounded-lg"
							/>
						</div>

						{/* Event Details */}
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-primary mb-4">Event Details</h3>

							<div className="space-y-4">
								<div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
									<Calendar className="text-accent mt-1" size={20} />
									<div>
										<p className="font-semibold text-stone-700">Date</p>
										<p className="inline text-stone-600">Sunday, July 6</p>
										<a
											href="https://www.google.com/calendar/render?action=TEMPLATE&text=Vey's+Baby+Shower&dates=20250706T140000/20250706T180000&details=Join+us+to+celebrate!&location=388+Yonge+Street,+Toronto"
											className=" text-accent underline transition-all hover:text-stone-600 hover:no-underline"
											target="_blank"
										>
											<CalendarPlus className="inline w-5 h-5 ml-1" />
											Google
										</a>
										<a
											href="/iphoneCalendarEvent.ics"
											download
											className="text-accent underline transition-all hover:text-stone-600 hover:no-underline"
										>
											<Apple className="inline w-5 h-5 ml-1" />
											Apple
										</a>
									</div>
								</div>

								<div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
									<Clock className="text-amber-600 mt-1" size={20} />
									<div>
										<p className="font-semibold text-stone-700">Time</p>
										<p className="text-stone-600">2:00 - 6:00pm</p>
									</div>
								</div>

								<div className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200">
									<MapPin className="text-stone-600 mt-1" size={20} />
									<div>
										<p className="font-semibold text-stone-700">Location</p>
										<a
											href="https://maps.app.goo.gl/xLBFYxconesW5LdG7"
											target="_blank"
											className="text-accent underline transition-all hover:text-stone-600 hover:no-underline whitespace-nowrap"
										>
											<Map className="inline w-5 h-5 ml-1" />
											Aura 388 Yonge St
										</a>{" "}
										<a
											href="https://maps.app.goo.gl/z1irTv1XjW653G7V9"
											target="_blank"
											className="text-accent underline transition-all hover:text-stone-600 hover:no-underline whitespace-nowrap"
										>
											<CircleParking className="inline w-5 h-5 ml-1" />
											Closest Parking
										</a>
									</div>
								</div>

								<div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
									<CheckCircle className="text-accent mt-1" size={20} />
									<div>
										<p className="font-semibold text-stone-700">RSVP</p>
										<p className="text-stone-700">Message one of us by June 25</p>
									</div>
								</div>

								<div className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200">
									<Gift className="text-stone-600 mt-1 flex-shrink-0" size={20} />
									<div>
										<p className="text-stone-600">
											Your presence is the greatest gift! For those who’ve asked, here’s our{" "}
											<a
												href="https://my.babylist.com/vincci-tsui"
												target="_blank"
												className="text-accent underline transition-all hover:text-stone-600 hover:no-underline"
											>
												<ListCheck className="inline w-5 h-5 ml-1" />
												registry
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
